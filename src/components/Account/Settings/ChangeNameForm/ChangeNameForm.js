import { Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { User } from "@/api";
import { useAuth } from "@/hooks";
import { initialValues, validationsSchema } from "./ChangeNameForm.form";
import styles from "./ChangeNameForm.module.scss";

const userCtrl = new User();

export function ChangeNameForm() {
  const { user } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(user.firstname, user.lastname),
    validationSchema: validationsSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await userCtrl.updateMe(user.id, formValue)
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <label>Nombre y apellidos</label>
      <div className={styles.content}>
        <Form.Input name="firstname" placeholder="Nombre" value={formik.values.firstname} onChange={formik.handleChange} error={formik.errors.name}/>
        <Form.Input name="lastname" placeholder="Apellidos" value={formik.values.lastname} onChange={formik.handleChange} error={formik.errors.name}/>
        <Form.Button type="submit" loading={formik.isSubmitting}>Enviar</Form.Button>
      </div>
    </Form>
  )
}
