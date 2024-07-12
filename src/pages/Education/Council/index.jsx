import React, {Fragment} from 'react'
import css from './index.module.css'
import ArrowLink from "../../../components/ArrowLink";
import DownloadLink from "../../../components/DownloadLink";
import Contacts from "../../../components/Contacts";
import Breadcrumbs from "../../../components/Breadcrumbs";
import StuffSlider from "../../../components/StuffSlider";

const Master = () => {
    return (
        <Fragment>
            <div className={css.container}>
                <div className={css.wrapper}>
                    <Breadcrumbs
                        section={{
                            label: 'Образование',
                            route: '/education'
                        }}
                        pageLabel={"Диссертационный совет"}
                        className={css.breadcrumbs}
                    />
                    <h2 className={css.title}>Диссертационный совет</h2>
                    <p className={css.text}>Специальность диссертационного совета: <b>1.3.8. – физика конденсированного состояния (физико-математические науки, технические науки).</b></p>
                    <h2 className={css.titleSlider}>Cостав совета</h2>
                    <StuffSlider className={css.stuffSlider}/>
                    <h2 className={css.title}>Документы</h2>
                    <div className={css.downloadLinkGroup}>
                        <DownloadLink title="Состав совета" className={css.downloadLink} />
                        <DownloadLink title="Положение о присуждении ученых степеней" className={css.downloadLink} />
                        <DownloadLink title="Положение о совете по защите диссертаций" className={css.downloadLink} />
                        <DownloadLink title="Об оформлении диссертации" className={css.downloadLink} />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Master;