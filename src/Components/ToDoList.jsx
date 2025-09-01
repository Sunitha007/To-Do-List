import { useState } from "react";
import { Container, Form, Button, ListGroup, Row, Col } from "react-bootstrap";
import { ImBin } from "react-icons/im";

export default function TodoList() {
    const [task, setTask] = useState("");
    const [list, setList] = useState([]);

    const Add = () => {
        if (task.trim()) {
            setList([...list, { text: task, completed: false }]);
            // console.log(list, "list");
            // console.log(task, "task");
            setTask("");
        } else {
            alert("You Not Enter your Task");
        }
    };

    const toggleComplete = (index) => {
        // console.log("index",index);       
        const newList = [...list];
        newList[index].completed = !newList[index].completed;
        // console.log("newList[index].completed",newList[index].completed);
        
        setList(newList);
        // console.log("setList",setList);

    };
    function Delete(indexItem) {
        // console.log("index item",indexItem);      
        const updatedList = [...list];
        updatedList.splice(indexItem, 1);
        setList(updatedList);
    }

    // if (list) {

    //     console.log(list, "list");

    // }

    return (
        <Container className="mt-5 ">
            <h1 className="text-center mb-4">TODO LIST</h1>

            <Row className="justify-content-center mb-3">
                <Col xs={8}>
                    <Form.Control
                        type="text"
                        placeholder="Enter your Task"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />
                </Col>
                <Col xs="auto">
                    <Button variant="primary" onClick={Add}>
                        Add Task
                    </Button>
                </Col>
            </Row>
            {list.length > 0 &&

                (<div className="d-flex justify-content-around">
                    <h5>Total Task:{list.length} </h5>
                     <h5>Pending Task: {list.filter(item => !item.completed).length}</h5>
                    <h5>Completed Task: {list.filter(item => item.completed).length}</h5>            
                </div>
                )
            }

            <ListGroup>

                {list.map((item, i) => (

                    <ListGroup.Item key={i} className="d-flex justify-content-between">
                        <Form.Check
                            type="checkbox"
                            label={
                                <span
                                    style={{
                                        color: item.completed ? "green" : "black",
                                        textDecoration: item.completed ? "line-through" : "none"
                                    }}
                                >
                                    {item.text}
                                </span>
                            }
                            checked={item.completed}
                            onChange={() => toggleComplete(i)}

                        />

                        <Button onClick={() => Delete(i)} variant="danger"><p className="mb-0 "><ImBin /></p>
                        </Button>
                    </ListGroup.Item>

                ))}
            </ListGroup>
        </Container>
    );
}

