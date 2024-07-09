import { OrdersType, OrdersTypeDB } from "@/types/types";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { createOrder, updateOrder } from "../../db/controlers/ordersControler";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { triggerOrder } from "@/store/Features/trigger/orderTrigger";

function ModalOrder(props: OrdersType) {
  const [show, setShow] = useState(false);
  const dispatch = useAppDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formData, setFormData] = useState<OrdersTypeDB>({
    _id: props._id,
    id: props.id,
    title: props.title,
    count: props.description.count,
    USD: props.description.sum.USD,
    UAH: props.description.sum.UAH,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    props._id ? await updateOrder(formData) : createOrder(formData);
    setShow(false);
    dispatch(triggerOrder(true));
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="btn">
        {props._id?"Update order":"Create order"}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> {props._id?"Update order":"Create order"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" role="form">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                onChange={handleChange}
                name="title"
                value={formData.title}
                required
              />
              <Form.Label>Count</Form.Label>
              <Form.Control
                type="number"
                onChange={handleChange}
                name="count"
                value={formData.count}
                required
              />
              <Form.Label>USD</Form.Label>
              <Form.Control
                type="number"
                onChange={handleChange}
                name="USD"
                value={formData.USD}
                required
              />
              <Form.Label>UAH</Form.Label>
              <Form.Control
                type="number"
                onChange={handleChange}
                name="UAH"
                value={formData.UAH}
                required
              />
               <Form.Label>Number order</Form.Label>
              <Form.Control
                type="number"
                onChange={handleChange}
                name="id"
                value={formData.id}
                required
              />
               <div className="d-flex justify-content-xl-end gap-2">
              <Button
                variant="secondary"
                onClick={handleClose}
                className="mt-3"
              >
                Close
              </Button>
              <Button variant="primary" type="submit" className="mt-3">
              {props._id?"Update order":"Create order"}
              </Button>
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalOrder;
