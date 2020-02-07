This is a simple way to fake props in gatsby. It allows you to add key:value pairs to a file that is able to be refrenced anywhere in your code. the format looks like this:

// now works with arrays!   ... just put an array into the prop field and it will destructure and the the objects in the array for you.... if it is not an array of objects it will fail gracefully

// import the props from gatsbypropshandler<br />
import { props } from 'gatsbypropshandler'

// add a prop in the form of an object .... and only an object, nothing else works at present.... it should fail gracefully though <br />
props({
    hello: 'world'
})

// refrencing the prop anywhere is a similiar format... but pass in just the key value as a string
props('hello') // returns 'world'