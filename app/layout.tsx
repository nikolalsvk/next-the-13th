import "./global.css";
import styles from "../styles/Home.module.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
