import React from 'react'
import { SectionList, Text, ScrollView } from 'react-native'
import propTypes from 'prop-types'

import Row from './rowView'


const renderSectionHeader = (obj) => <Text>{obj.section.title}</Text>

const ContactList = props => {
    const renderItem = ({ item }) => (<Row {...item}
        onSelectContact={(contact)=>{
            // debugger;
            props.onSelectContact(contact)
        } } />)
    const ContactsByLetters = props.contacts.reduce((obj, Contacts) => {
        // console.error(props.contacts)
        const fLetter = Contacts.name[0].toUpperCase()
        return {
            ...obj,
            [fLetter]: [...(obj[fLetter] || []), Contacts],

        }
    }, {})

    const section = Object.keys(ContactsByLetters).sort().map(ltr => ({
        title: ltr,
        data: ContactsByLetters[ltr],
    }))
    return (

        <SectionList

            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
            sections={section}
        />

    )
}

ContactList.propTypes = {
    renderItem: propTypes.func,
    renderSectionHeader: propTypes.func,
    Contacts: propTypes.array,
}

export default ContactList