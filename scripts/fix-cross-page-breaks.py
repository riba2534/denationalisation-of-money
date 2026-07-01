#!/usr/bin/env python3
"""修复 OCR 跨页段落断裂：把被空行错误拆分的同一段合并回来。

规则（保守）：
- 上一段末字为汉字/字母，且非句末标点（。！？；!?;）、非闭合符号（」』）)】》"'）；
- 下一段首字为汉字/字母，且非标题/列表/表格/分隔线/脚注定义开头；
- 则合并两段。blockquote 续行补 > 前缀。
链式合并：一段被拆成多片时全部合回。
"""
import re
import glob
import sys

SENT_END = set('。！？；!?;')
CLOSE = set("」』）)】》\"'")
HEADING = re.compile(r'^#{1,6}\s')
LIST = re.compile(r'^([-*+]\s|\d+\.\s)')
TABLE = re.compile(r'^\|')
HR = re.compile(r'^---+\s*$')
FNDEF = re.compile(r'^\[\^[^\]]+\]:')


def is_cjk(c):
    return '一' <= c <= '鿿'


def is_word(c):
    return bool(c) and (c.isalpha() or is_cjk(c))


def last_char(s):
    s = s.rstrip()
    return s[-1] if s else ''


def first_char(s):
    s = s.lstrip()
    return s[0] if s else ''


def is_special_block(text):
    t = text.lstrip()
    return bool(HEADING.match(t) or LIST.match(t) or TABLE.match(t) or HR.match(t) or FNDEF.match(t))


def should_merge(cur, nxt):
    if not cur.strip() or not nxt.strip():
        return False
    if is_special_block(cur) or is_special_block(nxt):
        return False
    lc = last_char(cur)
    fc = first_char(nxt)
    if not lc or not fc:
        return False
    if lc in SENT_END or lc in CLOSE:
        return False
    if not (is_word(lc) and is_word(fc)):
        return False
    return True


def do_merge(cur, nxt):
    lc = last_char(cur)
    fc = first_char(nxt)
    if cur.lstrip().startswith('>'):
        # blockquote 续行：nxt 每行补 > 前缀
        lines = []
        for l in nxt.split('\n'):
            if l.lstrip().startswith('>'):
                lines.append(l)
            elif l.strip() == '':
                lines.append('>')
            else:
                lines.append('> ' + l)
        return cur + '\n' + '\n'.join(lines)
    # 普通段落：中文直接连，英文间加空格
    if is_cjk(lc) or is_cjk(fc):
        sep = ''
    else:
        sep = ' '
    return cur + sep + nxt


def merge_text(content):
    blocks = re.split(r'\n\n+', content)
    if len(blocks) <= 1:
        return content, 0
    result = []
    cur = blocks[0]
    merges = 0
    for nxt in blocks[1:]:
        if should_merge(cur, nxt):
            cur = do_merge(cur, nxt)
            merges += 1
        else:
            result.append(cur)
            cur = nxt
    result.append(cur)
    return '\n\n'.join(result), merges


def main():
    total_merges = 0
    files = sorted(glob.glob('chapters/*.md'))
    for path in files:
        with open(path, encoding='utf-8') as f:
            orig = f.read()
        new, m = merge_text(orig)
        if m > 0:
            with open(path, 'w', encoding='utf-8') as f:
                f.write(new)
            print(f'{path}: {m} merges')
            total_merges += m
    print(f'TOTAL: {total_merges} merges across {len(files)} files')


if __name__ == '__main__':
    main()
