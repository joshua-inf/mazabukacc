import { Nav } from "../header";
import { Events } from "./homecomp/Ezvents";
import { Mainhome } from "./homecomp/mainhome";
import Newss from "./homecomp/News";

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
                                            <div>
                                                <div>
                                                    <h3 className="mt-5 text-uppercase">Anouncements</h3>
                                                    <hr/>
                                                    <hr/>
                                                    <div className="border px-4 py-5">
                                                        <p className="display-6">
                                                            statement will be made soon ...
                                                        </p>
                                                        <a className="" href="#link">previous news</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <h3 className="mt-5 text-uppercase">NEWS AND OTHER ARTICLES</h3>
                                            <hr/>
                                            <hr/>
                                                <Newss/>
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