import PageComponent from "../components/PageComponent.jsx";
import {useStateContext} from "../contexts/ContextProvider.jsx";
import SurveyListItem from "../components/SurveyListItem.jsx";

export default function Surveys() {
    const {surveys} = useStateContext();

    const onDeleteClick = () => {
        console.log("On Delete Click")
    }

    return(
        <PageComponent title='Surveys'>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
                {surveys.map(survey => (
                    <SurveyListItem survey={survey} key={survey.id} onClick={onDeleteClick} />
                ))}
            </div>
        </PageComponent>
    )
}