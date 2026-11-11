import React from 'react';
import Link from 'next/link';

/* Server-side markdown renderer untuk dokumen legal (heading, list, tabel, bold, tautan). */

function inline(text: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  const re = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]*)\)/g;
  let last = 0;
  let i = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    if (m[1] !== undefined) {
      nodes.push(<strong key={i++} className="font-bold text-[#1F1B16]">{m[1]}</strong>);
    } else {
      const href = m[3];
      const cls = 'font-medium text-[#D93510] underline underline-offset-2 hover:text-[#FF5000]';
      nodes.push(
        href.startsWith('/') ? (
          <Link key={i++} href={href} className={cls}>{m[2]}</Link>
        ) : (
          <a key={i++} href={href} className={cls} rel="noopener noreferrer">{m[2]}</a>
        ),
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

const splitRow = (line: string) => line.replace(/^\||\|$/g, '').split('|').map((c) => c.trim());
const slug = (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export type LegalHeading = { id: string; text: string; level: 2 | 3 };

export function legalHeadings(source: string): LegalHeading[] {
  return source
    .split('\n')
    .filter((l) => l.startsWith('## ') || l.startsWith('### '))
    .map((l) =>
      l.startsWith('### ')
        ? { id: slug(l.slice(4)), text: l.slice(4), level: 3 as const }
        : { id: slug(l.slice(3)), text: l.slice(3), level: 2 as const },
    );
}

export default function LegalDocument({ source }: { source: string }) {
  const lines = source.split('\n');
  const blocks: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim() || line.startsWith('# ')) { i++; continue; } // judul H1 ada di header halaman

    if (line.startsWith('### ')) {
      blocks.push(<h3 key={key++} id={slug(line.slice(4))} className="mt-6 mb-1.5 scroll-mt-28 text-[16px] font-bold text-[#1F1B16]">{inline(line.slice(4))}</h3>);
      i++;
    } else if (line.startsWith('## ')) {
      const t = line.slice(3);
      blocks.push(
        <h2 key={key++} id={slug(t)} className="mt-10 mb-3 scroll-mt-28 first:mt-0 text-[22px] font-bold tracking-[-0.02em] text-[#1F1B16]">
          {inline(t)}
        </h2>,
      );
      i++;
    } else if (line.startsWith('|')) {
      const rows: string[][] = [];
      while (i < lines.length && lines[i].startsWith('|')) {
        if (!/^\|[\s|:-]+\|?$/.test(lines[i])) rows.push(splitRow(lines[i]));
        i++;
      }
      const [head, ...body] = rows;
      blocks.push(
        <div key={key++} className="my-4 overflow-x-auto rounded-[12px] border border-[#EDE6E0] bg-white">
          <table className="w-full min-w-[480px] text-left text-[14px]">
            <thead className="bg-[#FFF1EC] text-[#1F1B16]">
              <tr>{head.map((c, j) => <th key={j} className="px-3 py-2.5 font-bold">{inline(c)}</th>)}</tr>
            </thead>
            <tbody>
              {body.map((r, j) => (
                <tr key={j} className="border-t border-[#EDE6E0] align-top">
                  {r.map((c, k) => <td key={k} className="px-3 py-2.5">{inline(c)}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      );
    } else if (/^- /.test(line) || /^\d+\. /.test(line)) {
      const ordered = /^\d+\. /.test(line);
      const items: string[] = [];
      while (i < lines.length && (ordered ? /^\d+\. /.test(lines[i]) : /^- /.test(lines[i]))) {
        items.push(lines[i].replace(/^(- |\d+\. )/, ''));
        i++;
      }
      const Tag = ordered ? 'ol' : 'ul';
      blocks.push(
        <Tag key={key++} className={`my-3 space-y-1.5 pl-6 ${ordered ? 'list-decimal' : 'list-disc'} marker:text-[#FF5000]`}>
          {items.map((t, j) => <li key={j} className="pl-1">{inline(t)}</li>)}
        </Tag>,
      );
    } else {
      const para: string[] = [];
      while (i < lines.length && lines[i].trim() && !/^(#|\||- |\d+\. )/.test(lines[i])) { para.push(lines[i]); i++; }
      blocks.push(
        <p key={key++} className="my-3">
          {para.map((t, j) => (
            <React.Fragment key={j}>{j > 0 && <br />}{inline(t)}</React.Fragment>
          ))}
        </p>,
      );
    }
  }
  return <div className="text-[16px] leading-[1.7] text-[#57534E]">{blocks}</div>;
}
