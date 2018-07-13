import colors from '../../generalStyles/colors'
import classes from '../../generalStyles/classes'

export default {
  wrapper: {flex:1, justifyContent:"center"},
  slide1: {
    ...classes.wrapper,
    ...classes.layout,
    backgroundColor: colors.primaryColor
  },
  slide2: {
    ...classes.wrapper,
    ...classes.layout,
    backgroundColor: colors.secondaryColor
  },
  slide3: {
    ...classes.wrapper,
    ...classes.layout,
    backgroundColor: colors.tertiaryColor
  },
  text: classes.sectionText,
  activeDotColor: "#FFFFFF",
  title: classes.title,
  button: {
    alignSelf: 'flex-end'
  },
  buttonText: {
    fontSize: 35
  }
}