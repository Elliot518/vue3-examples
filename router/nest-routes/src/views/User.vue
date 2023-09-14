<template>
    <div>
        <h1>About a user: {{$route.params.id}}</h1>
        <RouterLink :to="`/user/${$route.params.id}/info`">
            Info
        </RouterLink> |
        <RouterLink :to="`/user/${$route.params.id}/extra`">
            Extra
        </RouterLink>

        <RouterView />
    </div>
</template>

