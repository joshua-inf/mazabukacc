import { Events } from "./homecomp/Ezvents";
import { Mainhome } from "./homecomp/mainhome";
import News from "./homecomp/News";

export function Home(){
    return (
        <>
            <div className=" p-3">
                <div className="">
                    <div className="row">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-10">
                            <div>
                                <div className="row">
                                    <div className="col-4 d-none d-lg-block">
                                        <div className="px-4" style={{borderRight:'1px solid rgba(0,0,0,.2)'}}>
                                            <Events/>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-8">
                                        <div className="px-2">
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
                        <div className="col-lg-1"></div>
                    </div>
                </div>
            </div>
        </>
    )
}