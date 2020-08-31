import {AMPonent} from 'amponent'

AMPonent.make("my-header", {
    render: (box, props) => '<h1>I am the Header Component</h1>',
    pretty: (box, props) => `h1 {color: red;}`
  });