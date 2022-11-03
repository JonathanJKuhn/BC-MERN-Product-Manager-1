// import React, { useState, useEffect } from 'react'
import { Button, Col, Row, Form, Container } from 'react-bootstrap'
// import axios from 'axios'

const ProductForm = () => {
    // const [ msg, setMsg ] = useState("Loading...")
    // useEffect(() => {
    //     axios.get('http://localhost:8000/api')
    //         .then(res => setMsg(res.data.message))
    //         .catch(err => console.log(err))
    // }, [])
    return (
    <Container>
        <h2 className='mb-3'>Product Manager</h2>
        <Form>
            <Form.Group as={Row} className='mb-3' controlId='formTitle'>
                <Form.Label column sm={2}>
                    Title
                </Form.Label>
                <Col sm={10}>
                    <Form.Control type='text' />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className='mb-3' controlId='formPrice'>
                <Form.Label column sm={2}>
                    Price
                </Form.Label>
                <Col sm={10}>
                    <Form.Control type='text' />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className='mb-3' controlId='formDescription'>
                <Form.Label column sm={2}>
                    Description
                </Form.Label>
                <Col sm={10}>
                    <Form.Control type='text' />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className='mb-3'>
                <Col sm={{ span:10, offset: 1 }}>
                    <Button type='submit'>Create</Button>
                </Col>
            </Form.Group>
        </Form>
    </Container>
    )
}

export default ProductForm