export default function RootLayout({children,}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <header>Minha Navbar</header>
        <main>{children}</main>
        <footer>Rodapé</footer>
      </body>
    </html>
  );
}
