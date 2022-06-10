import Searchicon from '~/assets/images/icon/Search_icon.svg';

import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import { useDebounce } from '~/hooks';
import * as request from '~/utils/request';
const cx = classNames.bind(styles);

function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);
  const debounced = useDebounce(searchValue, 500);
  const inputRef = useRef();
  useEffect(() => {
    if (!debounced.trim()) {
      return;
    }
    setLoading(true);
    const fetchApi = async () => {
      try {
        const response = await request.get(`users/search`, {
          params: {
            q: debounced,
            type: 'less',
          },
        });
        setSearchResult(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchApi();
  }, [debounced]);

  const handleHideResult = () => {
    setShowResult(false);
  };

  return (
    <HeadlessTippy
      interactive
      visible={showResult && searchResult.length > 0}
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
          <PopperWrapper placeholder="top-right">
            <div className={cx('search-title')}>
              <h4 className={cx('title')}>Tài khoản</h4>
              {searchResult.map((account) => (
                <AccountItem key={account.id} data={account}></AccountItem>
              ))}
            </div>
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={cx('search')}>
        <input
          ref={inputRef}
          value={searchValue}
          placeholder="Tìm kiếm tài khoản và video"
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setShowResult(true)}
        />

        {!!searchValue && !loading && (
          <button
            className={cx('clear')}
            onClick={() => {
              setSearchValue('');
              inputRef.current.focus();
            }}
          >
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {loading && <FontAwesomeIcon className={cx('loading-icon')} icon={faSpinner} />}

        <span className={cx('spanspliter')}></span>
        <button className={cx('search-btn')}>
          <img src={Searchicon} alt="Search-icon" />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
