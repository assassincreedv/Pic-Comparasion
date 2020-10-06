import React from 'react';
import { withStyles, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core'
import point from './point.json'

const styles = { 
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  container: {
    margin: '20px auto',
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  }
}

const tabelHeads = [
  'original Picture',
  'processed Picture',
  'point'
]

function importAll(r) {
  return r.keys().map(r);
}

class App extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    const { classes } = this.props;
    const original = importAll(require.context('../original', false, /\.(png|jpe?g|svg)$/));
    const processed = importAll(require.context('../processed', false, /\.(png|jpe?g|svg)$/));
    return (
      <div className={classes.root}>
        <h1 style={{textAlign: 'center'}}>Pics Processed Comparartion</h1>
        <div className={classes.container}>
          <Table style={{width: '67%', maxWidth: '1200px', minWidth:'500px'}}>
            <TableHead>
              <TableRow>
                {tabelHeads.map((ele, index) => 
                    <TableCell key={index}>{ele}</TableCell>
                  )}
              </TableRow>
            </TableHead>
            <TableBody>
                  {original.map((ele, index) => 
                    <TableRow key={index}>
                      <TableCell>
                        <img src={ele} alt="original pics"></img>
                      </TableCell>
                      <TableCell>
                        <img src={processed[index]} alt="processed pics"></img>
                      </TableCell>
                      <TableCell>
                        {point[index]}
                      </TableCell>
                    </TableRow>
                  )}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }
  
}

export default withStyles(styles)(App);
