import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, Input, FormLayoutGroup, FormLayout, Select, Button, Radio, Textarea, Checkbox, HeaderButton, Link, platform, IOS } from '@vkontakte/vkui';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';

const osname = platform();

const FormPanel = props => (
	<Panel id={props.id}>
      <PanelHeader
		addon={<HeaderButton onClick={props.go} data-to='home'>Назад</HeaderButton>}
		left={<HeaderButton onClick={props.go} data-to='home'>{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}</HeaderButton>}
		/>
      <FormLayout>
        <Input type="email" top="E-mail" />
        <FormLayoutGroup top="Пароль" bottom="Пароль может содержать только латинские буквы и цифры.">
          <Input type="password"  placeholder="Введите пароль" />
          <Input type="password" placeholder="Повторите пароль" />
        </FormLayoutGroup>
        <Input top="Имя" />
        <Input top="Фамилия" />
        <Select top="Пол" placeholder="Выберите пол">
          <option value="m">Мужской</option>
          <option value="f">Женский</option>
        </Select>
        <FormLayoutGroup top="Тип документа">
          <Radio name="type">Паспорт</Radio>
          <Radio name="type">Загран</Radio>
        </FormLayoutGroup>
        <Textarea top="О себе" />
        <Checkbox>Согласен со всем <Link>этим</Link></Checkbox>
        <Button size="xl">Зарегистрироваться</Button>
      </FormLayout>
    </Panel>
);

FormPanel.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default FormPanel;
