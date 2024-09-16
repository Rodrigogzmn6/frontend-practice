export const FromAbletonArticle = ({
  title,
  description
}: {
  title: string
  description: string
}) => {
  return (
    <div
      className='shrink-0 text-sm max-w-60
      lg:shrink lg:text-xl lg:w-auto'>
      <p className='font-normal lg:font-semibold'>{title}</p>
      <p className='font-light'>{description}</p>
    </div>
  )
}
