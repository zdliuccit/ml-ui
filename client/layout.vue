<template>
  <div class="ml-body">
    <div class="ml-sidebar">
      <ul class="side-nav">
        <li class="nav-item">
          <a>安装</a>
          <div class="nav-group">
            <div class="nav-group-title">base</div>
            <ul class="pure-menu-list" style="height: auto;">
              <li class="nav-item">
                <a @click="$router.push('/component/installation')" class="active">Layout 布局</a>
                <a class="">Layout 布局</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="ml-content">
      <div class="markdown-body">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>