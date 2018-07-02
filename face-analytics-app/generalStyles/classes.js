import { Constants } from 'expo'

export default {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    flex: 1,
    alignItems: 'center'
  },
  sectionText: {
    color: '#FFFFFF',
    fontSize: 25  
  },
  layout: {
    paddingTop: Constants.statusBarHeight + 20,
    padding: (0, 15, 15, 15),
  },
  title: {
    color: '#FFFFFF',
    fontSize: 35,
    fontWeight: 'bold'
  }
}