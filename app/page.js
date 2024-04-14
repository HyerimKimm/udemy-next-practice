import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>혜림이의 식사 앱</h1>
      <ul>
        <li>
          <Link href={`/meals`}>meals 페이지로 이동하기</Link>
        </li>
        <li>
          <Link href={`/meals/ciabatta`}>meals 상세 페이지로 이동하기</Link>
        </li>
        <li>
          <Link href={`/community`}>community 페이지로 이동하기</Link>
        </li>
      </ul>
    </main>
  );
}
