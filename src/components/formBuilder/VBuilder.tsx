import { Formio } from "@formio/js";
import { FormType } from "@formio/react";
import React, { useRef, useState } from "react";
import Login from "../Login/Login";
import CustomButton from "./CustomButton";
import UpperInputs from "./UpperInputs";
import { formObj } from "./formObj";

export default function VBuilder() {
  const [schema, setSchema] = useState<FormType>({
    components: [],
  });

  const onFormChange = (schema: FormType) => {
    setSchema(schema);
  };

  const formBuilderRef = useRef(null);

  React.useEffect(() => {
    if (formBuilderRef.current) {
      Formio.builder(formBuilderRef.current, schema, {
        builder: {
          // basic: false,
          // advanced: false,
          data: false,
          ...formObj,
        },
        editForm: {
          textfield: [
            {
              key: "api",
              ignore: true,
            },
          ],
        },
      }).then((builder: any) => {
        builder.on("saveComponent", () => {
          setSchema(builder.schema);
          console.log(builder.schema);
        });
      });
    }
  }, [schema]);

  return (
    <div className="container">
      <UpperInputs />
      <div>
        <div ref={formBuilderRef} style={{ height: "100%" }} />
      </div>
      <div className="m-4">
        <CustomButton className="btn btn-danger" name="Back" />
      </div>
      {/* Optional: Uncomment to display schema and rendered form */}
      {/*
      <Card className="my-4">
        <Card title="Form JSON Schema" className="my-4">
          <Card.Body>
            <Card.Title className="text-center">As JSON Schema</Card.Title>
            <ReactJson src={schema} name={null} collapsed={true}></ReactJson>
          </Card.Body>
        </Card>
        <Card.Body>
          <Card.Title className="text-center">As Rendered Form</Card.Title>
          <Form src={schema} />
        </Card.Body>
      </Card>
      */}
    </div>
  );
}
