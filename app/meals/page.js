import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious Meals, created {` `}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite receipt and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid
          meals={[
            {
              title: "김밥",
              slug: "",
              image: "",
              summary: "A Korean traditional Food that All Korean loves",
              creator: "Hyerim Kim",
            },
          ]}
        />
      </main>
    </>
  );
}
