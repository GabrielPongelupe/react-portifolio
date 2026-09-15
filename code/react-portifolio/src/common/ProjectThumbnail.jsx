/**
 * Miniatura de um projeto.
 *
 * - "logo": imagem da marca do projeto, já entregue em 16:9 com o fundo embutido.
 * - "cover": capa tipográfica, usada quando o projeto não tem logo próprio.
 */
const ProjectThumbnail = ({ project, portuguese, imageClassName = "", onImageClick }) => {
  const { cover } = project;
  const pick = (field) => (portuguese ? field?.br : field?.eng);

  if (project.thumbnailType === "cover" && cover) {
    return (
      <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-neutral-950 px-6 text-center">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_70%)]" />

        <span className="relative text-[10px] uppercase tracking-[0.3em] text-neutral-400">
          {pick(cover.kicker)}
        </span>

        <h4 className="relative mt-3 max-w-[18ch] font-serif text-xl leading-[1.15] text-white sm:mt-4 sm:text-3xl">
          {pick(cover.title)}
        </h4>

        {pick(cover.subtitle) && (
          <p className="relative mt-2 max-w-[32ch] text-[11px] leading-snug text-neutral-300 sm:mt-3 sm:text-xs">
            {pick(cover.subtitle)}
          </p>
        )}

        {pick(cover.footnote) && (
          <span className="relative mt-3 text-[9px] uppercase tracking-[0.25em] text-neutral-500 sm:mt-4">
            {pick(cover.footnote)}
          </span>
        )}
      </div>
    );
  }

  return (
    <img
      src={project.image}
      alt={project.title}
      onClick={onImageClick}
      className={`h-full w-full object-cover ${onImageClick ? "cursor-zoom-in" : ""} ${imageClassName}`}
    />
  );
};

export default ProjectThumbnail;
