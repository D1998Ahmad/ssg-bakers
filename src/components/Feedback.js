import { TextField, Button, FormHelperText } from "@mui/material";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import * as Yup from "yup";

import useNotify from "./controls/useNotify";
import Notify from "./controls/Notify";

const Feedback = () => {
  const { handleClose, handleOpen, open, severity } = useNotify();

  const onSubmit = (values, form) => {
    handleOpen();
    form.resetForm();
  };

  const initialValues = {
    feedback: "",
    fullName: "",
    email: "",
  };

  const validationSchema = Yup.object().shape({
    feedback: Yup.string().min(2, "Too short").required("Required"),
    fullName: Yup.string().min(2, "Too short").required("Required"),
    email: Yup.string().email("Not valid").required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        return (
          <Form>
            <div className="pt-5 md:pt-0 grid grid-cols-1 gap-2">
              <div className=" flex justify-around">
                <div className="text-3xl font-bold">Feedback</div>
              </div>
              <div className="address px-3 ">
                <Field name="feedback">
                  {({ field, meta }) => {
                    return (
                      <TextField
                        error={meta.feedback}
                        id="outlined-textarea"
                        label="Feedback"
                        placeholder="Enter text..."
                        multiline
                        rows={3}
                        {...field}
                        fullWidth
                      />
                    );
                  }}
                </Field>
                <ErrorMessage name="feedback">
                  {(msg) => {
                    return (
                      <FormHelperText style={{ color: "red" }}>
                        {msg}
                      </FormHelperText>
                    );
                  }}
                </ErrorMessage>
              </div>
              <div className="phone px-3 flex flex-col md:flex-row justify-between md:flex-wrap ">
                <div className="w-full md:w-2/4 mb-3 md:mb-0 md:pr-1.5">
                  <Field name="fullName">
                    {({ field, meta }) => {
                      return (
                        <TextField
                          error={!!meta?.fullName}
                          id="outlined-textarea"
                          label="Full name"
                          placeholder="Enter full name..."
                          className=""
                          {...field}
                          fullWidth
                        ></TextField>
                      );
                    }}
                  </Field>
                  <ErrorMessage name="fullName">
                    {(msg) => {
                      return (
                        <FormHelperText style={{ color: "red" }}>
                          {msg}
                        </FormHelperText>
                      );
                    }}
                  </ErrorMessage>
                </div>

                <div className="w-full md:w-2/4 md:pl-1.5 ">
                  <Field name="email">
                    {({ field, meta }) => {
                      return (
                        <TextField
                          error={meta.email}
                          id="outlined-textarea"
                          label="Email"
                          placeholder="Enter email"
                          fullWidth
                          {...field}
                        />
                      );
                    }}
                  </Field>
                  <ErrorMessage name="email">
                    {(msg) => {
                      return (
                        <FormHelperText style={{ color: "red" }}>
                          {msg}
                        </FormHelperText>
                      );
                    }}
                  </ErrorMessage>
                </div>
              </div>
              <div className="button flex justify-around mx-3">
                <Button
                  variant="contained"
                  type="submit"
                  fullWidth
                  disabled={!(formik.dirty && formik.isValid)}
                >
                  SUBMIT
                </Button>
              </div>
              <Notify
                open={open}
                handleClose={handleClose}
                severity={severity}
              />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Feedback;
