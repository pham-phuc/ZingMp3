import ThemeItem from '../ThemeItem/ThemeItem';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { v4 as uuidv4 } from 'uuid';
import style from './ThemeContainer.module.scss';

const cx = classNames.bind(style);

function ThemeContainer({ data }) {
    return (
        <>
            <div className={cx('topic-title')}>
                <h1>{data.names}</h1>
            </div>
            <div className={cx('topic-body-list')}>
                {data.data?.map((item, index) => (
                    <ThemeItem key={uuidv4()} data={item} />
                ))}
            </div>
        </>
    );
}
ThemeContainer.prototype = {
    data: PropTypes.node,
};
export default ThemeContainer;
