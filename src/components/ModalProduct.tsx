import {ProductsType, ProductsTypeDB } from "@/types/types";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { createProduct, updateProduct } from "../../db/controlers/productControler";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { triggerProduct } from "../store/Features/trigger/productTrigger";

function ModalProduct(props: ProductsType) {
  const [show, setShow] = useState(false);
  const dispatch = useAppDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formData, setFormData] = useState<ProductsTypeDB>({
    _id: props._id,
    title: props.title,
    type: props.typeProduct,
    specification: props.specification,
    guaranteeStart:props.guarantee.start,
    guaranteEnd: props.guarantee.end,
    USD: props.price[0].value,
    UAH: props.price[1].value,
    order: props.order
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    props._id ? await updateProduct(formData) : createProduct(formData);
    setShow(false);
    dispatch(triggerProduct(true));
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="btn">
        {props._id?"Update product":"Create  product"}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
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
              <Form.Label>Type</Form.Label>
               <Form.Control
                type="string"
                onChange={handleChange}
                name="type"
                value={formData.type}
                required
              />
              <Form.Label>Specification</Form.Label>
               <Form.Control
                type="string"
                onChange={handleChange}
                name="specification"
                value={formData.specification}
                required
              />
               <Form.Label>Start</Form.Label>
               <Form.Control
                type="date"
                onChange={handleChange}
                name="guaranteeStart"
                value={formData.guaranteeStart}
                required
              />
              <Form.Label>End</Form.Label>
               <Form.Control
                type="date"
                onChange={handleChange}
                name="guaranteEnd"
                value={formData.guaranteEnd}
                required
              />
              <Form.Label>Order</Form.Label>
               <Form.Control
                type="string"
                onChange={handleChange}
                name="order"
                value={formData.order}
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
              {props._id?"Update product":"Create  product"}
              </Button>
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalProduct;
