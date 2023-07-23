import { ACCENT_COLOR } from '@/styled/colors.styled'
import { LineWave } from 'react-loader-spinner'

const Loader = () => {
  return (
    <LineWave
      height="100"
      width="100"
      color={ACCENT_COLOR}
      ariaLabel="line-wave"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      firstLineColor=""
      middleLineColor=""
      lastLineColor=""
    />
  )
}

export default Loader
