import React from "react";

type ArticleCardProps = {
  title: string;
  href: string;
  description: string;
};
const ArticleCard: React.FC<ArticleCardProps> = ({ title, href, description }) => {
    return (
      <a
        href={href}
        className="flex flex-col border border-zinc-800 p-4 rounded-lg hover:bg-zinc-900 transition-colors hover:border-zinc-700"
      >
        <article>
          <h2 className="text-[22px] font-semibold mb-2">{title}</h2>
          <p
            className="text-[17px] text-zinc-400 break-word"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </article>
      </a>
    );
  };

const ArticleCardResorces: React.FC = () => {
  return (
    <div className="text-[20px] grid gap-4 lg:grid-cols-3 justify-center">
      <ArticleCard
        title="Paintings"
        href="/paintings"
        description="<b><u>ภาพเขียน</u></b> หลากหลายจากศิลปินชั้นนำ นำขึ้นสู่สินทรัพย์ดิจิทัล เก็บไว้ใน Crypto Wallet ในรูปแบบของ NFT เพื่อยืนยันการเป็นเจ้าของผลงานจริง"
      />
      <ArticleCard
        title="Photographs"
        href="/photographs"
        description="<b><u>ภาพถ่าย</u></b> จากตากล้องทั้งมืออาชีพและผู้คลั่งไคล้การถ่ายภาพเป็นงานอดิเรก สามารถนำขึ้นมาเก็บไว้บน Digital Gallery ทำทำการพิมพ์ซ้ำ ได้หลายครั้ง และใช้ NFT Token Digital เป็น Identity เพื่อแยกแยะภาพต้นฉบับและภาพ Re-Print ออกจากกันได้รวมทั้งพิสูจน์ทราบตัวตนของผู้ถือครองผลงานต้นฉบับได้ด้วย CryptoSignature"
      />
      <ArticleCard
        title="Crafts"
        href="/crafts"
        description="<b><u>งานฝีมือ</u></b> อันเป็นศิลปะร่วมสมัย สามารถนำมาเชื่อมโยงกับ สินทรัพย์ดิจิทัล เพื่อข่ายผ่าน NFT MarketPlace ชั้นนำของโลกอย่าง Opensea โดยไม่จำเป็นต้องมีการขนส่งเคลื่อนย้ายผลงานจริง"
      />
    </div>
  );
};

export default ArticleCardResorces;
