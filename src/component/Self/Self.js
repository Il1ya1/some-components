import React from 'react';
import _one from './images/1.png';
import './style.scss';
import { NavLink } from "react-router-dom";

const Self = () => {
  return (
    <div className="self">
      <div className="self__header">
        <h1 className="self__title">Компоненты</h1>
      </div>
      <div className="self__content">
        <div className="self__list selfList">
          <NavLink to="/DataTable" className="self__item selfItem">
            <div className="selfItem__contains">
              <figure className="selfItem__figure">
                <img className="selfItem__image" src={_one} alt="Submit" />
              </figure>
              <div className="selfItem__content">
                <span className="selfItem__name">
                  React-приложение для отображения таблицы с данными.
                </span>
                <div className="selfItem__desc">
                  <p className="selfItem__descCaption">
                    Функционал
                  </p>
                  <ul className="selfItem__list list">
                    <li className="list__item">Сортировка по столбцам.</li>
                    <li className="list__item">Клиентская пагинация</li>
                    <li className="list__item">Фильтрация</li>
                    <li className="list__item">По клике на строку таблицы значения полей выводятся в дополнительном блоке.</li>
                    <li className="list__item">Кнопка добавить, по нажатии на которую выпадает форма добавления ряда</li>
                    <li className="list__item">После заполнения всех инпутов активируется кнопка Добавить в таблицу которая вставляет заполненный ряд в начало таблицы</li>
                  </ul>
                </div>
              </div>
            </div>
          </NavLink>
          <NavLink to="/Basket" className="self__item selfItem">
            <div className="selfItem__contains">
              <div className="selfItem__content">
                <span className="selfItem__name">
                  basket
                </span>
              </div>
            </div>
          </NavLink>
        </div>

      </div>
    </div>
  )
}

export default Self;