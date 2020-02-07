This is a simple way to fake props in gatsby. It allows you to add key:value pairs to a file that is able to be refrenced anywhere in your code. the format looks like this:

// import the props from gatsbypropshandler
import { props } from 'gatsbypropshandler'

// add a prop in the form of an object .... and only an object, nothing else works at present.... it should fail gracefully though <br />
props({
    hello: 'world'
})

// refrencing the prop anywhere is a similiar format... but pass in just the key value as a string
props('hello') // returns 'world'