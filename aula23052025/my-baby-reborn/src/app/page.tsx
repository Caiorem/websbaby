import { jsonNoticiaRepository } from "@/repositories/json-noticia.repository";

export default async function Home() {
  const noticias = await jsonNoticiaRepository.findAll();

  return (
  <div>
        {noticias.map(noticia =>(
          <div key={noticia.titulo}>
            <h1>{noticia.titulo}</h1>
            <h4>{noticia.subtitulo}</h4>
            <p><strong>Autor:</strong>{noticia.autor}</p>
            <p>{noticia.texto}</p>
            <hr/>
          </div>
        ))}
  </div>
  );
}
