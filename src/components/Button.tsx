type ButtonProps = {
  type: 'secondary' | 'tertiary' | 'primary';
  name: string;
  twClass?: string;
  onClick?: () => void;
}
const Button = (props: ButtonProps) => {
  const { type, name, twClass = '', onClick } = props;
  switch (type) {
    case 'primary':
      return (
        <button className={`w-full bg-pdark text-white rounded-[14px] py-[1rem] md:max-w-[300px] ${twClass}`} onClick={onClick}>{name}</button>
      )
    case 'secondary':
      return (
        <button className={`px-[2rem] py-[1rem] rounded-[14px] border-[1px] border-[#191a23] ${twClass}`} onClick={onClick}>{name}</button>
      )
    case 'tertiary':
      return (
        <button className={`text-mh4 bg-pgreen rounded-[7px] px-[0.5rem] py-[0.25rem] ${twClass}`} onClick={onClick}>{name}</button>
      )
    default:
      return null
  }
}
export default Button