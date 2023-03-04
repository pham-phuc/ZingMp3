import { useDispatch, useSelector } from 'react-redux';
import ItemPlayList from '~/components/item/ItemPlayList/ItemPlayList';
import classNames from 'classnames/bind';
import style from './PlayList.module.scss';
import Button from '~/components/Button';
import { setBooleanEdit, setModalAddPlayList } from '~/redux/action';
import Empty from '~/components/Empty/Empty';

const cx = classNames.bind(style);
function PlayList() {
    const { playListFavorite, privatePlayLists } = useSelector((state) => state.Favorite);
    const dispatch = useDispatch();
    const handleAddPlayList = () => {
        dispatch(setModalAddPlayList(true));
        dispatch(setBooleanEdit(false));
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h3>PLAYLIST</h3>
                <Button
                    content="Tạo playlist mới"
                    className={cx('btn')}
                    iconLeft={<i className="icon ic-add"></i>}
                    onClick={handleAddPlayList}
                />
            </div>
            {playListFavorite?.length > 0 || privatePlayLists?.length > 0 ? (
                <div className={cx('body')}>
                    {playListFavorite.map((e) => (
                        <ItemPlayList data={e} />
                    ))}
                    {privatePlayLists.map((e) => (
                        <ItemPlayList data={e} type="private-playlist" />
                    ))}
                </div>
            ) : (
                <Empty title="Chưa có PlayList nào trong thư viện cá nhân" link="/top100" />
            )}
        </div>
    );
}

export default PlayList;
