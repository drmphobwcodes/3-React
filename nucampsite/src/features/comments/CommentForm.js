import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Label } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateCommentForm } from '../../utils/validateCommentForm';
import {useDispatch} from 'react-redux';
import { addComment } from './commentsSlice';

const CommentForm = ({ campsiteId }) => {

    const [modalOpen, setModalOpen] = useState(false);
    const dispatch = useDispatch();

    const handleSubmit = (values) => {
      const comment = {
        campsiteId: parseInt(campsiteId),
        rating: values.rating,
        author: values.author,
        text: values.commentText,
        date: new Date().toISOString()
      };

      console.log(comment);
      dispatch(addComment(comment));

      setModalOpen(false);
    };


    return (
      <>
        <Button outline onClick={() => setModalOpen(true)}>
          <i className='fa fa-pencil fa-lg' /> Add Comment
        </Button>
        <Modal isOpen={modalOpen} toggle={() => setModalOpen(!modalOpen)}>
          <ModalHeader toggle={() => setModalOpen(!modalOpen)}>Add Comment</ModalHeader>
          <ModalBody>
            <Formik
            initialValues={{
              rating: '',
              author: '',
              commentText: ''
            }}
            onSubmit={handleSubmit}
            validate={validateCommentForm}
          >
            {({ values }) => (
              <Form>
                <FormGroup>
                  <Label htmlFor='rating'>Rating</Label>
                  <Field className='form-control' as='select' id='rating' name='rating'>
                    <option>Select...</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Field>
                  <ErrorMessage name='rating'>{(msg) => <div className='text-danger'>{msg}</div>}</ErrorMessage>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor='author'>Your Name</Label>
                  <Field className='form-control' type='text' id='author' name='author' />
                  <ErrorMessage name='author'>{(msg) => <div className='text-danger'>{msg}</div>}</ErrorMessage>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor='commentText'>Comment</Label>
                  <Field className='form-control' as='textarea' id='commentText' name='commentText' />
                </FormGroup>
                <Button type='submit' color='primary'>
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
          </ModalBody>
        </Modal>
      </>
    );
  };

export default CommentForm;