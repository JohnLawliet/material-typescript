import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Formik, Form, Field } from "formik";
import { TextField, RadioGroup } from 'formik-material-ui';
import { CircularProgress, FormControlLabel, Radio, FormLabel  } from "@material-ui/core";
import { object, string } from "yup";
import { useHistory } from "react-router";
import { ICreate } from "../../commonTypes";
import services from "../../services";

const initialValues : ICreate ={
    title: '',
    details: '',
    category: '',
}

const Create = () => {
    const history = useHistory()

    return (
        <Container>
            <Typography
                variant="h6"
                component="h2"
                color="textSecondary"
                gutterBottom
            >
                Create a note
            </Typography>
            <Formik
                initialValues={initialValues}
                validationSchema ={
                    object({
                        title:string().required().min(5),
                        details:string().required().min(10).max(400),
                        category: string().required().oneOf(["money","work","todos","reminders"])
                    })
                }
                onSubmit={(values) => 
                    new Promise((res, reject) => 
                        setTimeout(async () => {
                            try{
                                const dbResponse = await services.putData(values)
                                res(dbResponse)
                            }
                            catch(e){
                                reject(e)
                            }
                        }, 2000,) 
                    ).then(res => {
                        console.log("RESSS : ",res)
                        history.push('/')
                    })
                }
            >
            {({ values, errors, isSubmitting }) => (
                <Form autoComplete="off">
                    <Box py={1}>
                        <Field 
                            component={TextField}
                            name="title"
                            type="text"
                            label="Title"
                            color="primary"
                            variant="outlined"
                            fullWidth
                        />
                    </Box>

                    <Box py={1}>
                        <Field 
                        variant="outlined"
                            component={TextField}
                            name="details"
                            type="text"
                            label="Details"
                            color="primary"
                            fullWidth multiline
                            rows={4}
                        />
                    </Box>

                    <Box py={1}>
                        <FormLabel>Note Category</FormLabel>
                        <Field component={RadioGroup} name="category" row >
                            <FormControlLabel
                                value="money"
                                control={<Radio />}
                                label="Money"
                                disabled={isSubmitting}
                            />
                            <FormControlLabel
                                value="todos"
                                control={<Radio />}
                                label="Todos"
                                disabled={isSubmitting}
                            />
                            <FormControlLabel
                                value="reminders"
                                control={<Radio />}
                                label="Reminders"
                                disabled={isSubmitting}
                            />
                            <FormControlLabel
                                value="work"
                                control={<Radio />}
                                label="Work"
                                disabled={isSubmitting}
                            />
                        </Field>
                    </Box>                   

                    <Button  
                        variant="contained" 
                        color="primary"
                        type="submit"
                        endIcon={<ArrowForwardIosIcon />}
                        startIcon={isSubmitting? 
                            <CircularProgress size="0.9rem" color="secondary"/> :
                            null
                        }
                        disabled={isSubmitting}
                    >
                    {
                        isSubmitting? "Submitting" : "Submit"
                    }
                    </Button>

                    <pre>{JSON.stringify(errors, null, 4)}</pre>
                    <pre>{JSON.stringify(values, null, 4)}</pre>
                </Form>
            )}
            </Formik>            
        </Container>
    )
}

export default Create
