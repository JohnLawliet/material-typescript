import { createMuiTheme } from '@material-ui/core/styles';
import { yellow } from '@material-ui/core/colors';


// NOTE: If you are using TypeScript, then you would also need to use module augmentation for ADDING NEW VALUES
const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: yellow[400],
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});

export default theme