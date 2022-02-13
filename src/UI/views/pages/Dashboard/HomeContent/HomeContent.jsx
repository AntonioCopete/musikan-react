import { SectionWrapper } from './HomeContent.styles'

function HomeContent({ title, content }) {
  return (
    <>
      <h2>{title}</h2>
      <SectionWrapper>{content}</SectionWrapper>
    </>
  )
}

export default HomeContent
