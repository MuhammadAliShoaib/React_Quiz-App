import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


function SMStatus(props) {
    let { status } = props
    return (
        <div className="statusIcons">
            {
                status.map((e, i) => {
                    return (
                        <div key={i} >
                            {
                                e? <CheckCircleIcon/> : <HighlightOffIcon/>
                            }
                        </div>
                        )
                })
            }
        </div>
    )
}

export default SMStatus;