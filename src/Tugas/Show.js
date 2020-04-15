import React from 'react'
import {Card} from 'react-bootstrap'

const Show = (props) => {
    console.log(props.data)
    const { data } = props
    console.log(data._id)
    return (
            <Card>
            <Card.Img
                style={{
                    height: '100px'
                }}
            variant="top" src={`${data.values.imgUrl}`}/>
            <Card.Body>
                
                <Card.Text>
                    {data.values.nama} <br/>
                    Born : {data.values.ttl} <br/>
                    Died : {data.values.wafat} <br/>
                    Description : {data.values.description} <br/>
                    Establishment : {data.values.establishment}
                </Card.Text>
                
            </Card.Body>
            </Card>
    )
}

export default Show