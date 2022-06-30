import React from 'react';

const Home = () => {
    return (
        <div>
            <h1>This is home</h1>

            <div class="form-control">
  <label class="label">
    <span class="label-text">Add Your To-Do</span>
  </label>
  <label class="input-group">
    <input type="text" class="input input-bordered" />
    <input type="submit" className="input input-bordered"/>
  </label>
</div>
        </div>
    );
};

export default Home;