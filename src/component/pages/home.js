import { Events } from "./homecomp/Ezvents";
import { Mainhome } from "./homecomp/mainhome";
import News from "./homecomp/News";

export function Home(){
    return (
        <>
            <div className="container py-5">
                <div>
                    <div className="row">
                        <div className="col-4">
                            <Events/>
                        </div>
                        <div className="col-8">
                            <div className="px-5" style={{borderLeft:'1px solid rgba(0,0,0,.2)'}}>
                                <Mainhome/>
                                <h3 className="mt-5">NEWS AND OTHER ARTICLES</h3>
                                <hr/>
                                <hr/>
                                    <News/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}