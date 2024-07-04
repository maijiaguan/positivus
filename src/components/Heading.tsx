type HeadingProps = {
  type: "pgreen" | "pgrey";
  title: string | string[];
  subTitle?: string;
};
const Heading = (props: HeadingProps) => {
  const { type, title, subTitle = "" } = props;
  if(Array.isArray(title)){
    return (
      <h3 className="text-mh3 leading-tight md:text-h3">
        {title.map((t, i) => (
          <><p key={i} className={`bg-${type} inline-block rounded-[7px]`}>{t}</p><br /></>
        ))}
      </h3>
    )
  }
  return (
    <header className="w-full h-auto ">
      <div className="w-full h-auto space-y-[30px] flex flex-col items-center md:flex-row md:space-y-0 md:space-x-[40px]">
        <h2 className={`bg-${type} text-mh2 rounded-[7px] font-bold px-[0.5rem] md:text-h2 leading-tight`}>{title}</h2>
        <p className="text-mp leading-tight tracking-tight text-center md:text-left md:text-p w-full max-w-[580px]">{subTitle}</p>
      </div>
    </header>
  );
}
export default Heading