import colors from '../../generalStyles/colors'
import classes from '../../generalStyles/classes'

export default {
  wrapper: {},
  slide1: {
    ...classes.container,
    backgroundColor: colors.primaryColor,
  },
  slide2: {
    ...classes.container,
    backgroundColor: colors.secondaryColor,
  },
  slide3: {
    ...classes.container,
    backgroundColor: colors.tertiaryColor,
  },
  text: classes.sectionText,
  activeDotColor: "#FFFFFF"
}