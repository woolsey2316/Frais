import React from 'react'
import Layout from '../component/layout'
import SEO from '../component/seo'
import SectionTitle from '../component/SectionTitle'
import Alison from '../component/Alison'
import Leaves from '../component/Leaves'
import Style from '../styles/about.module.scss'

export default () => {
  return (
    <Layout>
      <SEO title="About" />
      <SectionTitle heading="A story of freshness" />
      <div
        style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: '6em' }}
      >
        <div className={Style.mosaic}>
          <div className={Style.mosaic__item}>
            <Alison />
          </div>
          <div className={Style.mosaic__item}>
            <Leaves />
          </div>
        </div>
        <div className={Style.inner}>
          <h1 className={Style.heading}>Meet Alison </h1>
          <p className={Style.description}>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. Feel free to drag and drop me
            anywhere you like on your page. I’m a great place for you to tell a
            story and let your users know a little more about you.
          </p>
          <p className={Style.description}>
            This is a great space to write long text about your company and your
            services. You can use this space to go into a little more detail
            about your company. Talk about your team and what services you
            provide. Tell your visitors the story of how you came up with the
            idea for your business and what makes you different from your
            competitors. Make your company stand out and show your visitors who
            you are.
          </p>
        </div>
      </div>
      <br />
      <br />
    </Layout>
  )
}
