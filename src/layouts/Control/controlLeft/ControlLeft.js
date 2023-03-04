/* eslint-disable react-hooks/exhaustive-deps */
import className from 'classnames/bind';
import { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import { v4 as uuidv4 } from 'uuid';
import toastMessage from '~/components/modal/toast';
import { setSongFavorite } from '~/redux/FavoriteList';
import style from './ControlLeft.module.scss';
import { setOpenLyric } from '~/redux/action';
const cx = className.bind(style);

function ControlLeft() {
    const idAudio = useSelector((state) => state.dataControl.idAudio);
    const { songFavorite } = useSelector((state) => state.Favorite);
    const { user } = useSelector((state) => state.action);
    const [favorite, setFavorite] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        setFavorite(songFavorite.map((e) => e.encodeId));
    }, [songFavorite]);
    const handleLike = () => {
        user ? dispatch(setSongFavorite(idAudio)) : toastMessage('Bạn vui lòng đăng nhập');
    };

    return (
        <div className={cx('left') + ' l-3 m-3 c-8'}>
            <div
                className={cx('image', 'action')}
                onClick={() => {
                    if (window.innerWidth <= 740) {
                        dispatch(setOpenLyric(true));
                    }
                }}
            >
                <img src={idAudio?.thumbnail} alt="" />
            </div>
            <div className={cx('info')}>
                <h3>{idAudio?.title}</h3>
                <p>
                    {idAudio?.artists?.map((i, index) => (
                        <span key={uuidv4()}>
                            <Link to={i.link}>{i.name}</Link>
                            {index < idAudio?.artists?.length - 1 && ', '}
                        </span>
                    ))}
                </p>
            </div>
            <Button
                onClick={() => handleLike()}
                small
                content={favorite.includes(idAudio?.encodeId) && user ? 'Xóa khỏi thư viện' : 'Thêm vào Thư viện'}
                iconLeft={
                    favorite.includes(idAudio?.encodeId) && user ? (
                        <i className="icon ic-like-full"></i>
                    ) : (
                        <i className="icon ic-like"></i>
                    )
                }
            />
        </div>
    );
}

export default memo(ControlLeft);
