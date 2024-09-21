interface TextProps {
  text: {
    main: string
    secondary: string
    third?: string
  }
}
export const Text: React.FC<TextProps> = ({ text }) => {
  return (
    <section className='w-5/6'>
      <h3 className='font-semibold'>{text.main}</h3>
      <p className='text-lg'>{text.secondary}</p>
      <p>{text.third !== undefined && text.third}</p>
    </section>
  )
}
