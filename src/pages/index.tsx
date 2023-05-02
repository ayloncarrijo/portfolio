import Head from "next/head";

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Aylon Carrijo | Portfólio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* <Drawer>
          <DrawerTrigger asChild>
            <IconButton label="Abrir menu">menu</IconButton>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <Logo />
            </DrawerHeader>
            <DrawerBody>
              <DrawerItem href="#">Início</DrawerItem>
              <DrawerItem href="#">Sobre</DrawerItem>
              <DrawerItem href="#">Habilidades</DrawerItem>
              <DrawerItem href="#">Projetos</DrawerItem>
              <DrawerItem href="#">Contato</DrawerItem>
            </DrawerBody>
            <DrawerFooter
              css={{ display: "flex", justifyContent: "center", gap: "$8 " }}
            >
              <IconButton label="Ativar modo claro" variant="outlined">
                light_mode
              </IconButton>
              <IconButton label="Ativar modo escuro" variant="outlined">
                dark_mode
              </IconButton>
            </DrawerFooter>
          </DrawerContent>
        </Drawer> */}
      </main>
    </>
  );
}
