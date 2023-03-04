import className from 'classnames/bind';
import style from './PageAdmin.module.scss';

const cx = className.bind(style);
function PageAdmin() {
    return (
        <div className={cx('wrapper')}>
            <a href="https://www.facebook.com/profile.php?id=100030113334007">
                <img
                    className={cx('avatar')}
                    src="https://scontent.fhan5-11.fna.fbcdn.net/v/t1.6435-9/125520270_416188872728220_5966359093712598071_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=CS-3RJBDit4AX8Ld5jf&_nc_ht=scontent.fhan5-11.fna&oh=00_AfCAy0kPxJAXwurk_nc4psSzenX4VUThRyZ_7VbopMKVhg&oe=642AB235"
                    alt=""
                />
            </a>
            <h1>Phúc Phạm</h1>
        </div>
    );
}

export default PageAdmin;
